import Spinner from "@/components/Spinner";

const Loading = () => {
    return (
        <div className="flex w-full min-h-screen justify-center  items-center text-center">
            <div className="mx-auto">
                <Spinner />
            </div>
        </div>
    );
};

export default Loading;
