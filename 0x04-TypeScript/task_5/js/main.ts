interface MajorCredits {
    major: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    minor: number;
    brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        major: subject1.major + subject2.major,
        brand: 'MajorCredits'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        minor: subject1.minor + subject2.minor,
        brand: 'MinorCredits'
    };
}