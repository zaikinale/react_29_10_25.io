import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
    persist(
        (set, get) => ({
            tasks: [],

            addTask: (text, deadline, tags) => {
                const newId = get().tasks.length + 1;
                set(state => ({
                    tasks: [
                        ...state.tasks,
                        {
                            id: newId,
                            text: text.trim(),
                            status: 'active',
                            deadline: deadline || null,
                            tags: tags || []
                        }
                    ]
                }));
            },

            removeTask: (id) => {
                set(state => ({
                    tasks: state.tasks.filter(task => task.id !== id)
                }));
            },

            updateTask: (id, updates) => {
                set(state => ({
                    tasks: state.tasks.map(task =>
                        task.id === id ? { ...task, ...updates } : task
                    )
                }));
            },

            toggleComplete: (id) => {
                set(state => ({
                    tasks: state.tasks.map(task =>
                        task.id === id
                            ? { ...task, status: task.status === 'completed' ? 'active' : 'completed' }
                            : task
                    )
                }));
            },

            reset: () => set({ tasks: [] })
        }),
        {
            name: 'tasks-storage',
            partialize: (state) => ({ tasks: state.tasks })
        }
    )
);

export default useTaskStore;