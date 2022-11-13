export class Course {
    constructor(
        public name: string,
        public description: string,
        public codeCourse: string,
        public codeTeacher: string,
        public period: string,
        public semester: string,
        public section: string,
        public _id?: any,
    ){}
}