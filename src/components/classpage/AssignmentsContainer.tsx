import React, { useState } from 'react';
import AssignmentList from './AssignmentList';
import AssignmentDetail from './AssignmentDetail';

interface Assignment {
    id: number;
    title: string;
    dueDate: string;
    description: string;
    status: 'upcoming' | 'pastDue' | 'completed';
    files?: File[];
}

const AssignmentsContainer: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([
        { id: 1, title: 'Assignment 1', dueDate: '2024-10-25 23:59', description: 'Details for Assignment 1', status: 'upcoming' },
        { id: 2, title: 'Assignment 2', dueDate: '2024-10-10 23:59', description: 'Details for Assignment 2', status: 'pastDue' },
        { id: 3, title: 'Assignment 3', dueDate: '2024-10-18 15:00', description: 'Details for Assignment 3', status: 'completed' },
    ]);
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

    const handleBack = () => {
        setSelectedAssignment(null);
    };

    const updateAssignmentStatus = (id: number, status: 'upcoming' | 'pastDue' | 'completed') => {
        setAssignments(assignments.map(assignment =>
            assignment.id === id ? { ...assignment, status } : assignment
        ));
    };

    return (
        <>
            {selectedAssignment ? (
                <AssignmentDetail
                    assignment={selectedAssignment}
                    onBack={handleBack}
                    onUpdateStatus={updateAssignmentStatus}
                />
            ) : (
                <AssignmentList
                    assignments={assignments}
                    setAssignments={setAssignments}
                    onSelectAssignment={setSelectedAssignment}
                />
            )}
        </>
    );
};

export default AssignmentsContainer;