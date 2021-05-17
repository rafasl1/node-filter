const AwsController = {
    async index(request, response) {
        const { fields } = request.query
        const separatedFields = fields.split("-") 

        const instances = [
            {
                "id": 1,
                "resourceType": "Redshift Cluster",
                "status": "Running",
                "team": "Winterhold",
                "slack": "#winterhold"
            },
            {
                "id": 2,
                "resourceType": "DynamoDB Table",
                "status": "Running",
                "team": "Tulum",
                "slack": "#tulum"
            },
            {
                "id": 3,
                "resourceType": "S3 bucket",
                "status": "Sleeping",
                "team": "Winterhold",
                "slack": "#winterhold"
            },
            {
                "id": 4,
                "resourceType": "Redshift Cluster",
                "status": "Running",
                "team": "Winterfell",
                "slack": "#winterfell"
            },
            {
                "id": 5,
                "resourceType": "EC2 Instance",
                "status": "Running",
                "team": "Condado",
                "slack": "#condado"
            },
            { 
                "fields": separatedFields
            }
        ]


        for(let i = 0; i < instances.length; i++){
            Object.keys(instances[i]).forEach(key => {
                let deleteKey = true

                separatedFields.forEach(field => {
                    if(key == field) deleteKey = false
                })

                if(deleteKey) delete (instances[i])[key]
            });
        }

        return response.json(instances)
    
    }
    
    
}

export default AwsController