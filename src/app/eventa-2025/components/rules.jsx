const Rules = () => {
    return (
        <div className="text-justify">
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Participants are not allowed to annotate the test sets.</li>
                <li>External datasets are permitted. However, participants may only use publicly accessible datasets and pre-trained models. The use of private datasets or pre-trained models is strictly prohibited.</li>
                <li>Commercial tools, libraries, APIs, etc. are strictly prohibited.</li>
                <li>Final scores are calculated based on performance on the Private Test set.</li>
                <li>Participants must make their source code publicly available on GitHub to ensure reproducibility.</li>
                <li>Participants must submit a detailed paper through the official challenge platform before the deadline to validate their solutions.</li>
                <li>Late submissions will not be accepted.</li>
                <li>Only registered teams that submit papers are eligible to win, but all participants’ scores will be recognized.</li>
            </ul>
        </div>
    );
};

export default Rules;
