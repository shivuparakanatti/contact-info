export const contact =(n)=>{
    return {
        type : 'CONTACTS',
        payload : n
    }
}

export const clearAll = ()=>{
    return {
        type : 'CLEAR_ALL'
    }
}

export const cancel=(n)=>{
    return {
        type:'CANCEL',
        payload:n
    }
}