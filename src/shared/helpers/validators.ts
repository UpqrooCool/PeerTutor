const validateName = (name: string): boolean => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
}

const validateGroup = (group: string): boolean => {
    const re = /^[0-9]{2}[A-Z]{2}$/;
    return re.test(group);
}



export { validateName, validateGroup };