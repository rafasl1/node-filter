const AwsController = {
    async index(request, response) {
        const instances = [
            {
                "id": 1,
                "resourceType": "Redshift Cluster",
                "status": "Running",
                "Team": "Winterhold",
                "Slack": "#winterhold"
            },
            {
                "id": 2,
                "resourceType": "DynamoDB Table",
                "status": "Running",
                "Team": "Tulum",
                "Slack": "#tulum"
            },
            {
                "id": 3,
                "resourceType": "S3 bucket",
                "status": "Sleeping",
                "Team": "Winterhold",
                "Slack": "#winterhold"
            },
            {
                "id": 4,
                "resourceType": "Redshift Cluster",
                "status": "Running",
                "Team": "Winterfell",
                "Slack": "#winterfell"
            },
            {
                "id": 5,
                "resourceType": "EC2 Instance",
                "status": "Running",
                "Team": "Condado",
                "Slack": "#condado"
            }
        ]

        return response.json(instances)
    }
}

export default AwsController