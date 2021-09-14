export class Form {
    name!: string;
    branch!: string;
    percentage!: number;
    district!: string;
    email!: string;
    status!: string;
    appliedDate!: string;

    setData(applicationData: any) {
        this.name = applicationData.name;
        this.branch = applicationData.branch;
        this.percentage = applicationData.percentage;
        this.district = applicationData.district;
        this.email = applicationData.email;
        this.status = applicationData.status;
        this.appliedDate = applicationData.appliedDate;
    }
}
