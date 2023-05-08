const data = [
  {
    namespace: "azhu-mytoken-test",
    component: "azhu-mytoken-test-server",
    imageName: "mytoken-server",
    imageTag: "v1.2.3",
    replicas: 2,
    status: "Ready"
  },
  {
    namespace: "azhu-mytoken-prod",
    component: "azhu-mytoken-prod-mysql",
    imageName: "mysql",
    imageTag: "8.0",
    replicas: 1,
    status: "Ready"
  },
  {
    namespace: "azhu-mytoken-uat",
    component: "azhu-mytoken--uat-ui",
    imageName: "mytoken-ui",
    imageTag: "v1.0.6",
    replicas: 1,
    status: "ImgPullError"
  },
  {
    namespace: "azhu-mytoken-dev",
    component: "azhu-mytoken-dev-adapter",
    imageName: "mytoken-adapter",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-adb-dev",
    component: "azhu-adb-dev-ui",
    imageName: "adb-ui",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-adb-dev",
    component: "azhu-adb-dev-server",
    imageName: "adb-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-qb-pp-prod",
    component: "azhu-qb-pp-prod-server",
    imageName: "qb-pp-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "Ready"
  },
  {
    namespace: "azhu-qb-pp-uat",
    component: "azhu-qb-pp-uat-server",
    imageName: "qb-pp-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "Ready"
  },
  {
    namespace: "azhu-qb-pp-prod",
    component: "azhu-qb-pp-prod-ui",
    imageName: "qb-pp-ui",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-aloe-test",
    component: "azhu-aloe-server",
    imageName: "aloe-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-aloe-uat",
    component: "azhu-aloe-server",
    imageName: "aloe-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-aloe-prod",
    component: "azhu-aloe-server",
    imageName: "aloe-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  },
  {
    namespace: "azhu-mfo-aok-uat",
    component: "azhu-mfo-aok-server",
    imageName: "mfo-aok-server",
    imageTag: "v2.1.0",
    replicas: 1,
    status: "OOMKilled"
  }
];

export default data;
