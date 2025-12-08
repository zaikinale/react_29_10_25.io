import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProfileStore = create(
    persist(
        (set, get) => ({
            pofiles: [],

            addProfile: (name, email, password) => {
                const newId = Date.now();
                set(state => ({
                    pofiles: [
                        ...state.pofiles,
                        {
                            id: newId,
                            name: name.trim(),
                            status: 'active',
                            email: email,
                            password: password.trim()
                        }
                    ]
                }));
            },

            removeProfile: (id) => {
                set(state => ({
                    pofiles: state.pofiles.filter(pofile => pofile.id !== id)
                }));
            },

            // updateTask: (id, updates) => {
            //     set(state => ({
            //         tasks: state.tasks.map(task =>
            //             task.id === id ? { ...task, ...updates } : task
            //         )
            //     }));
            // },

            // toggleComplete: (id) => {
            //     set(state => ({
            //         tasks: state.tasks.map(task =>
            //             task.id === id
            //                 ? { ...task, status: task.status === 'completed' ? 'active' : 'completed' }
            //                 : task
            //         )
            //     }));
            // },
            //
            // reset: () => set({ tasks: [] })
        }),
        {
            name: 'profile-storage',
            partialize: (state) => ({ pofiles: state.pofiles })
        }
    )
);

export default useProfileStore;