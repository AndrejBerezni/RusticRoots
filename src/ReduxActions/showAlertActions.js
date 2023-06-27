const showAlert = (alertText) => {
    return {
        type: 'SHOW ALERT',
        payload: alertText
    }
}

const hideAlert = () => {
    return {
        type: 'HIDE ALERT'
    }
}

export {showAlert, hideAlert}