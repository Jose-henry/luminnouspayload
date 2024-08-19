

export default function Loading() {
    const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

    return (
            <div className="loading">
                <div className="loading-text">
                    {letters.map((letter, index) => (
                        <span key={index} className="loading-text-words">
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
    );
}
