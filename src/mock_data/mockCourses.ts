export interface Course {
    id: number;
    title: string;
    date: string;
    originalPrice: string;
    discountedPrice: string;
    thumbnail: string;
    idCurriculum: number;
}

export const mockCourses: Course[] = [
    {
        id: 1,
        title: 'Microsoft Excel',
        date: '2024-11-01',
        originalPrice: '1.500.000đ',
        discountedPrice: '1.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 1
    },
    {
        id: 2,
        title: 'Power BI',
        date: '2024-11-05',
        originalPrice: '2.000.000đ',
        discountedPrice: '1.500.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 1
    },
    {
        id: 3,
        title: 'SQL Server',
        date: '2024-11-10',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 1
    },
    {
        id: 4,
        title: 'Google Sheets',
        date: '2024-10-15',
        originalPrice: '1.200.000đ',
        discountedPrice: '900.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 2
    },
    {
        id: 5,
        title: 'Google Data Studio',
        date: '2024-10-20',
        originalPrice: '1.800.000đ',
        discountedPrice: '1.200.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 2
    },
    {
        id: 6,
        title: 'BigQuery',
        date: '2024-10-25',
        originalPrice: '2.000.000đ',
        discountedPrice: '1.600.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 2
    },
    {
        id: 7,
        title: 'Python',
        date: '2024-12-01',
        originalPrice: '3.000.000đ',
        discountedPrice: '2.500.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 3
    },
    {
        id: 8,
        title: 'Machine Learning',
        date: '2024-12-05',
        originalPrice: '3.200.000đ',
        discountedPrice: '2.800.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 3
    },
    {
        id: 9,
        title: 'Data Science',
        date: '2024-12-10',
        originalPrice: '3.500.000đ',
        discountedPrice: '3.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 3
    },
    {
        id: 10,
        title: 'JavaScript',
        date: '2024-12-15',
        originalPrice: '3.100.000đ',
        discountedPrice: '2.600.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 4
    },
    {
        id: 11,
        title: 'React',
        date: '2024-12-20',
        originalPrice: '3.200.000đ',
        discountedPrice: '2.700.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 4
    },
    {
        id: 12,
        title: 'Node.js',
        date: '2024-12-25',
        originalPrice: '3.300.000đ',
        discountedPrice: '2.800.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 4
    },
    {
        id: 13,
        title: 'Manual Testing',
        date: '2024-11-15',
        originalPrice: '2.200.000đ',
        discountedPrice: '1.800.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 5
    },
    {
        id: 14,
        title: 'Automation Testing',
        date: '2024-11-20',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 5
    },
    {
        id: 15,
        title: 'Selenium',
        date: '2024-11-25',
        originalPrice: '2.800.000đ',
        discountedPrice: '2.200.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 5
    },
    {
        id: 16,
        title: 'Docker',
        date: '2024-12-01',
        originalPrice: '3.000.000đ',
        discountedPrice: '2.400.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 6
    },
    {
        id: 17,
        title: 'Kubernetes',
        date: '2024-12-05',
        originalPrice: '3.200.000đ',
        discountedPrice: '2.700.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 6
    },
    {
        id: 18,
        title: 'CI/CD',
        date: '2024-12-10',
        originalPrice: '3.500.000đ',
        discountedPrice: '3.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 6
    },
    {
        id: 19,
        title: 'Networking Basics',
        date: '2024-10-30',
        originalPrice: '2.000.000đ',
        discountedPrice: '1.600.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 7
    },
    {
        id: 20,
        title: 'Network Security',
        date: '2024-11-05',
        originalPrice: '2.200.000đ',
        discountedPrice: '1.800.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 7
    },
    {
        id: 21,
        title: 'Cisco Certification',
        date: '2024-11-10',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 7
    },
    {
        id: 22,
        title: 'Microsoft Word',
        date: '2024-10-15',
        originalPrice: '1.500.000đ',
        discountedPrice: '1.200.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 8
    },
    {
        id: 23,
        title: 'Microsoft Excel',
        date: '2024-10-20',
        originalPrice: '1.500.000đ',
        discountedPrice: '1.200.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 8
    },
    {
        id: 24,
        title: 'Microsoft PowerPoint',
        date: '2024-10-25',
        originalPrice: '1.500.000đ',
        discountedPrice: '1.200.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 8
    },
    {
        id: 25,
        title: 'Photoshop',
        date: '2024-11-15',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 9
    },
    {
        id: 26,
        title: 'Illustrator',
        date: '2024-11-20',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 9
    },
    {
        id: 27,
        title: 'After Effects',
        date: '2024-11-25',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 9
    },
    {
        id: 28,
        title: 'IC3 Certification',
        date: '2024-12-01',
        originalPrice: '2.000.000đ',
        discountedPrice: '1.600.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 10
    },
    {
        id: 29,
        title: 'MOS Certification',
        date: '2024-12-05',
        originalPrice: '2.200.000đ',
        discountedPrice: '1.800.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 10
    },
    {
        id: 30,
        title: 'IT Fundamentals',
        date: '2024-12-10',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 10
    },
    {
        id: 31,
        title: 'Digital Art Fundamentals',
        date: '2024-12-15',
        originalPrice: '3.000.000đ',
        discountedPrice: '2.500.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 11
    },
    {
        id: 32,
        title: 'Advanced Painting Techniques',
        date: '2024-12-20',
        originalPrice: '3.200.000đ',
        discountedPrice: '2.700.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 11
    },
    {
        id: 33,
        title: 'Character Design',
        date: '2024-12-25',
        originalPrice: '3.500.000đ',
        discountedPrice: '3.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 11
    },
    {
        id: 34,
        title: '3D Modeling',
        date: '2024-10-30',
        originalPrice: '3.500.000đ',
        discountedPrice: '3.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 12
    },
    {
        id: 35,
        title: 'Video Editing',
        date: '2024-11-05',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 12
    },
    {
        id: 36,
        title: 'Post-production',
        date: '2024-11-10',
        originalPrice: '3.000.000đ',
        discountedPrice: '2.400.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 12
    },
    {
        id: 37,
        title: 'HTML/CSS',
        date: '2024-12-01',
        originalPrice: '2.000.000đ',
        discountedPrice: '1.600.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 13
    },
    {
        id: 38,
        title: 'JavaScript',
        date: '2024-12-05',
        originalPrice: '2.500.000đ',
        discountedPrice: '2.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 13
    },
    {
        id: 39,
        title: 'Responsive Design',
        date: '2024-12-10',
        originalPrice: '2.800.000đ',
        discountedPrice: '2.300.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 13
    },
    {
        id: 40,
        title: 'SEO',
        date: '2024-12-15',
        originalPrice: '1.500.000đ',
        discountedPrice: '1.200.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 14
    },
    {
        id: 41,
        title: 'Google Analytics',
        date: '2024-12-20',
        originalPrice: '1.800.000đ',
        discountedPrice: '1.400.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 14
    },
    {
        id: 42,
        title: 'Social Media Marketing',
        date: '2024-12-25',
        originalPrice: '2.000.000đ',
        discountedPrice: '1.600.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 14
    },
    {
        id: 43,
        title: 'Flutter',
        date: '2024-11-15',
        originalPrice: '3.000.000đ',
        discountedPrice: '2.400.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 15
    },
    {
        id: 44,
        title: 'React Native',
        date: '2024-11-20',
        originalPrice: '3.200.000đ',
        discountedPrice: '2.700.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 15
    },
    {
        id: 45,
        title: 'iOS Development',
        date: '2024-11-25',
        originalPrice: '3.500.000đ',
        discountedPrice: '3.000.000đ',
        thumbnail: 'https://via.placeholder.com/200x190',
        idCurriculum: 15
    }
];
