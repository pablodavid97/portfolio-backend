module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('project', [
            {
                title: 'Tanstack Events',
                url: 'https://tanstack-events-project.vercel.app',
                image: 'tanstack-events.png',
                order: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Next Level Food',
                url: 'https://next-foodies-project-rust.vercel.app/',
                image: 'next-level-food.png',
                order: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Travel Agency',
                url: 'https://travel-project-ashy.vercel.app/',
                image: 'travel-agency.png',
                order: 3,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'PlacePicker',
                url: 'https://place-picker-app-delta.vercel.app/',
                image: 'place-picker.png',
                order: 4,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'ReactQuiz',
                url: 'https://react-quiz-app-one-orpin.vercel.app/',
                image: 'react-quiz.png',
                order: 5,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Final Countdown',
                url: 'https://final-countdown-five.vercel.app/',
                image: 'final-countdown.png',
                order: 6,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Investment Calculator',
                url: 'https://investment-calculator-five-navy.vercel.app/',
                image: 'investment-calculator.png',
                order: 7,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React Challenges',
                url: 'https://framer-motion-challenge-project.vercel.app/',
                image: 'framer-motion-challenge.png',
                order: 8,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Events Authentication',
                url: 'https://authentication-app-two-eta.vercel.app/',
                image: 'authentication-app.png',
                order: 9,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React TS Todo',
                url: 'https://react-ts-todo-indol.vercel.app/',
                image: 'react-ts-todo.png',
                order: 10,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Server Components',
                url: 'https://react-server-components-peach.vercel.app/',
                image: 'react-server-components.png',
                order: 11,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Redux Hooks',
                url: 'https://react-redux-hooks.vercel.app/',
                image: 'react-redux-hooks.png',
                order: 12,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Next Routes',
                url: 'https://next-routes-project.vercel.app/',
                image: 'next-routes.png',
                order: 13,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Motion Playground',
                url: 'https://framer-motion-playground-rho.vercel.app/',
                image: 'framer-motion-playground.png',
                order: 14,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'SPA Events',
                url: 'https://spa-events-app.vercel.app/',
                image: 'spa-events.png',
                order: 15,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Redux Shopping',
                url: 'https://redux-shopping-app-livid.vercel.app/',
                image: 'redux-shopping-cart.png',
                order: 16,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Redux Auth',
                url: 'https://redux-authentication-three.vercel.app/',
                image: 'redux-auth.png',
                order: 17,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Redux Counter',
                url: 'https://redux-counter-steel.vercel.app/',
                image: 'redux-counter.png',
                order: 18,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'ReactFood',
                url: 'https://food-order-app-seven-jade.vercel.app/',
                image: 'react-food.png',
                order: 19,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React Counter',
                url: 'https://counter-project-omega.vercel.app/',
                image: 'react-counter.png',
                order: 20,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React Forms',
                url: 'https://react-form-actions.vercel.app/',
                image: 'react-forms.png',
                order: 21,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React Shopping',
                url: 'https://react-shopping-app-seven.vercel.app/',
                image: 'react-shopping.png',
                order: 22,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Project Manager',
                url: 'https://react-project-manager-app.vercel.app/',
                image: 'react-project-manager.png',
                order: 23,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'ReactArt',
                url: 'https://react-art-project.vercel.app/',
                image: 'react-art.png',
                order: 24,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Tic Tac Toe',
                url: 'https://react-tic-tac-toe-two-snowy.vercel.app/',
                image: 'tic-tac-toe.png',
                order: 25,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React Essentials',
                url: 'https://react-components-black-rho.vercel.app/',
                image: 'react-essentials.png',
                order: 26,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'React Blog',
                url: 'https://react-blog-app-tau-self.vercel.app/',
                image: 'react-blog-app.png',
                order: 27,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('projects', null, {});
    },
};
