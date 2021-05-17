const filterController = {

    filterResponseProperties: function(response, properties) {
        for(let i = 0; i < response.length; i++){
            Object.keys(response[i]).forEach(key => {
                let deleteKey = true
    
                properties.forEach(field => {
                    if(key == field) deleteKey = false
                })
    
                if(deleteKey) delete (response[i])[key]
            });
        }
    }
}

export default filterController