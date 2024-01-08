# AWS Cloud Resume Challenge

This is my attempt of Cloud Resume Challenge by Forrest Brazeal.

##What is Cloud Resume Challenge?

The [Cloud Resume Challenge](https://cloudresumechallenge.dev/) is an initiative designed to help individuals showcase their skills in cloud computing, gain practical experience, and build a strong resume/portfolio in the process. 

### Architecture Diagram
![aws-cloud-resume-diagram](https://github.com/uzairahmed-8994/aws-cloud-resume-challenge/assets/149074942/a8b02ff2-be1f-482e-91a4-93ffbd794347)

#### Services Used:

- **S3**: For hosting static website contents
- **CloudFront**: Content Delivery Network service used to deliver website content with low latency and high transfer speed
- **Certificate Manager**: Manage SSL/TLS certificate to enable HTTPS for secure communication.
- **AWS Lambda**: For fetching and updating database.
- **DynamoDB**: Used for storing view count data.
- **GitHub Actions**: Automating deployment processes and continuous integration.

### Project Status

*Although this implementation is functional but there are several improvements and enhacements required which will be done in future. This project is an ongoing effort.*
