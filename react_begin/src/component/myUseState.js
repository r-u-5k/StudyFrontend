function myUseState(initValue) {
    let initialValue = initValue;

    function setState(value) {
        initialValue = value;
    }

    return [initialValue, setState];
}

export default myUseState;
