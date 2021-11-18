interface CovidCountCardProps {
  imageUrl: string;
  count: number;
}

const CovidCountCard = ({ imageUrl, count }: CovidCountCardProps) => {
  return (
    <div className="flex justify-center items-center bg-gray-200 py-3 w-[10.3rem] rounded-lg shadow-sm cursor-pointer space-x-2">
      <img src={imageUrl} className="w-20 h-20" />
      <h1 className="text-lg">{count}</h1>
    </div>
  );
};

export default CovidCountCard;
