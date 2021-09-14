export class Clgfees {
    admissionFees!: number;
    tutionFees!: number;
    examFees!: number;
    hostelFees!: number;

    setData(feesData: any) {
        this.admissionFees = feesData.admissionFees;
        this.tutionFees = feesData.tutionFees;
        this.examFees = feesData.examFees;
        this.hostelFees = feesData.hostelFees;
    }
}
