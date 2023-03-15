// on à créé un type pour le genre et on l'apportera dans dans notre type d'étudiants
export type StudentGender = 'male'|'female'

// on créé un type d'étudiants
export interface Student {
    id:number;
    name: string;
    gender: StudentGender;
    isSelected: boolean;
    isAbsent: boolean;
}


//je créer ma classe d'élève
export const STUDENTS:Student[]=[

    {
        id:1,
        name: 'Fahed',
        gender: "male",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:2,
        name: 'Erdal',
        gender: "male",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:3,
        name: 'Clara',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:4,
        name: 'Diambéré',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:5,
        name: 'Morgane',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:6,
        name: 'Hazar',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:7,
        name: 'Anne',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:8,
        name: 'Jiyun',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:9,
        name: 'Lilianna',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:10,
        name: 'Kanzia',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:11,
        name: 'Thomas',
        gender: "male",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:12,
        name: 'Christelle',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:14,
        name: 'Assa',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:14,
        name: 'Fama',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:15,
        name: 'Julie',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:16,
        name: 'Cynthia',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:17,
        name: 'Jérôme',
        gender: "male",
        isSelected: false,
        isAbsent: false,
    },
    {
        id:18,
        name: 'Katia',
        gender: "female",
        isSelected: false,
        isAbsent: false,
    }
]