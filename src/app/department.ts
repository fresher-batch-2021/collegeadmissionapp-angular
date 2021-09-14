export class Department {
    degree!: string;
    branch!: string;
    totalSeats!: number;
    appliedSeats!: number;
    availableSeats!: number;

    setData(branchData: any) {
        this.degree = branchData.degree;
        this.branch = branchData.branch;
        this.totalSeats = branchData.totalSeats;
        this.appliedSeats = branchData.appliedSeats;
        this.availableSeats = branchData.availableSeats;
    }
}
