export default function ScoreButton(prev, action) {
    switch (action.type) {
        case 'Change': {
            const { testname, Score } = action;
            return {
                ...prev,
                test: prev.test.map((e) => {
                    if (e.testname === testname) {
                        return { ...e, Score }
                    };
                    return e;
                })
            }

        }
        case 'Add': {
            const { testname, Score, grade } = action;
            return {
                ...prev,
                test: [...prev.test, { testname, Score, grade: grade }]
            }
        }
        case 'Delete': {
            return {
                ...prev,
                test: prev.test.filter((e) =>
                    e.testname !== action.deleteName)
            }

        }
        default: {
            throw Error(" No type")
        }
    }
}