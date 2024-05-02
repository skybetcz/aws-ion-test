/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-ion-test",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("MyVpc");
    sst.aws.
  
    const cluster = new sst.aws.Cluster("MyCluster", { vpc });
  
    cluster.addService("MyService", {
      public: {
        ports: [
          { listen: "80/http" },
        ],
      },
    });
  }
});
