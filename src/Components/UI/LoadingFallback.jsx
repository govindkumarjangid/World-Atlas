import { Loader } from "lucide-react";

const LoadingFallback = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <Loader className="animate-spin text-cyan-500" size={40} />
        </div>
    )
}

export default LoadingFallback;