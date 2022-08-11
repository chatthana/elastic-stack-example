# Elastic Stack on Docker

A experimential project on Elastic stack running on Docker (Compose). Also known as ELK or BELK (Beat + ELK)

## Overview

The projects uses ELK stack (Elasticsearch + Logstash + Kibana) to visualise logs shipped by Filebeat from the application.

It includes sample Node.js API project and Nginx. The Node.js API generates the log using winston in ECS (Elastic Common Schema) format

### How it works

Normally, Filebeat tails the files for new entries and send them to the destination (Elasticsearch or Logstash for example). Since this project is Docker based. The applications (in this case Nginx and Node.js API) are log sources.

They write the log internally but with bind mount feature of Docker, we can easily mount these paths to the local filesystem and share them between different containers. That's how Filebeat with dedicated containers come into play

> Kubernetes Compatibility
>
> The same concept (bind mount) can also be used in Kubernetes environment where containers within the same pod share local filesystem and network interface. We can deploy Filebeat container alongside base applications

## Log Files

1. Node.js API - `<WORKDIR>/logs/service.log`
2. Nginx - `/var/log/nginx/access.log` and `/var/log/nginx/error.log`

### Bind Mount Locations

1. Node.js logs - `apps/logs/node-api/`
2. Nginx - `apps/logs/nginx`

See `docker-compose.yml` file for more details
