let funcHolder = {};

let observerMenu = {
    addObserver: (name, func) => {
        funcHolder[name] = func
    },
    exercuteObserver: (name, param) => {
        funcHolder[name](param)
    }
}

export default observerMenu;