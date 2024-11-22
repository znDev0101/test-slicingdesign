import { informationCard } from "../../data/informationCard";

const CardInformation = () => {
  return (
    <div className='absolute -bottom-[150px] left-0 right-0 max-w-6xl mx-10 grid lg:hidden grid-cols-2 grid-rows-2 gap-3'>
      {informationCard.map((data, i: number) => {
        return (
          <div
            key={i}
            className='flex justify-center bg-white shadow-xl rounded-xl py-4'
          >
            <div className='flex gap-x-8 items-center'>
              <div className='flex flex-col items-center'>
                <img src={data.icon} alt={data.icon} className='w-8 h-8' />
                <h5>{data.title}</h5>
              </div>
              <h5 className='font-semibold text-xl'>{data.count}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardInformation;
