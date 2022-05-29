const debounce = (callBack, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
        debounceTimer && clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => callBack.apply(context, args), delay)
    }
}

export default debounce