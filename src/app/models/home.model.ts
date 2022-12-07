export class Course {
    constructor(
        public name: string,
        public code: string,
        public teacherCode: string,
        public year: string,
        public semester: string,
        public jornada: string,
        public _id?: any,
    ){}
}