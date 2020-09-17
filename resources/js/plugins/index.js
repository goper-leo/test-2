import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

//** Plugins
import Notify from "./notify"

Vue.use(Notify)

const settings = {
    TButton: {
        fixedClasses: 'focus:outline-none focus:shadow-outline inline-flex items-center transition ease-in-out duration-150',
        classes: 'text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 text-sm font-medium border border-transparent px-3 py-2',
        variants: {
            default: 'text-black bg-gray-100 hover:bg-gray-700 hover:text-white focus:border-blue-700 text-sm font-medium border px-3 py-2',
            error: 'text-white bg-red-600 hover:bg-red-500 focus:border-red-700  active:bg-red-700 text-sm font-medium border border-transparent px-3 py-2',
            success: 'text-white bg-green-600 hover:bg-green-500 focus:border-green-700 active:bg-green-700 text-sm font-medium border border-transparent px-3 py-2',
            funny: 'text-white bg-orange-600 hover:bg-orange-500 focus:border-orange-700 active:bg-orange-700 text-sm font-medium uppercase border-orange-200 px-4 py-2 border-2 rounded-full shadow',
            link: 'underline text-orange-500 px-3 py-2 hover:bg-orange-100 rounded'
        }
    },
    TInput: {
        fixedClasses: 'bg-white mb-4 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
        variants: {
            error: 'text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border border-red-300 rounded py-2 px-4 block w-full leading-normal placeholder-red-300',
            success: 'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal placeholder-green-300',
            default: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal'
        }
    },
    TTable: {
        fixedClasses: {
            table: 'shadow min-w-full divide-y divide-gray-200',
            tbody: 'bg-white divide-y divide-gray-200',
            td: 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700',
            theadTh: 'px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
        },
        variants: {
            thin: {
                td: 'p-1 whitespace-no-wrap text-sm leading-4 text-gray-700',
                theadTh: 'p-1 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
            }
        }
    },
    TModal: {
        fixedClasses: {
            overlay: 'z-20 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
            wrapper: 'z-10 relative mx-auto my-0 max-w-lg mt-24',
            modal: 'bg-white shadow overflow-hidden relative',
            body: 'p-4',
            header: 'p-4  text-sm font-semibold uppercase text-gray-700',
            footer: 'p-4 text-sm font-semibold uppercase text-gray-700',
            close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
            closeIcon: 'h-5 w-5 fill-current'
        },
        classes: {
            overlay: 'bg-black ',
            wrapper: '',
            modal: '',
            body: 'p-4',
            header: 'text-gray-700 border-b',
            footer: 'border-t ',
            close: 'text-gray-700 hover:text-gray-600',
            closeIcon: ''
        },
        variants: {
            danger: {
                overlay: 'bg-red-500',
                header: 'border-red-100 text-red-700 border-b',
                footer: 'border-red-100 bg-red-100 border-t  ',
                close: 'text-red-700 hover:text-red-600'
            },
            clean: {
                modal: 'rounded shadow-lg',
                footer: 'bg-gray-100 ',
                body: 'p-4 text-sm text-gray-700',
                close: 'bg-blue-100 p-1 flex items-center justify-center leading-normal rounded-full text-blue-80 hover:bg-blue-200'
            }
        }
    },

    TToggle: {
        fixedClasses: {
            wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
            wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
            button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
            buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
            checkedPlaceholder: 'inline-block',
            uncheckedPlaceholder: 'inline-block'
        },
        classes: {
            wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
            wrapperChecked: 'bg-blue-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
            button: 'h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-gray-400 text-xs',
            buttonChecked: 'h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-blue-500 text-xs',
            checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs',
            uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs'
        },
        variants: {
            danger: {
                wrapperChecked: 'bg-red-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent'
            },
            success: {
                wrapperChecked: 'bg-green-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent'
            },
            box: {
                wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent',
                wrapperChecked: 'bg-blue-500 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent',
                button: 'h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-gray-400 text-xs',
                buttonChecked: 'h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-blue-500 text-xs',
                checkedPlaceholder: 'rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs',
                uncheckedPlaceholder: 'rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs'
            }
        }
    }
}

Vue.use(VueTailwind, settings)