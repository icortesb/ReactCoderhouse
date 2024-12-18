import "ldrs/waveform";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <l-waveform size="60" stroke="3.5" speed="1" color="black"></l-waveform>
        </div>
    );
};

export default Spinner;
