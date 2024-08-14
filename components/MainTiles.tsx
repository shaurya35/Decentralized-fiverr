import React from 'react';

interface MainTilesProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  content: string;
}

const MainTiles: React.FC<MainTilesProps> = ({ Icon, content }) => {
  return (
    <div className="h-32 w-32 rounded-2xl flex flex-col justify-around p-3 border-2 border-gray-200 cursor-pointer shadow-md ">
      <Icon className="w-8 h-8 mx-auto" />
      <div className="text-center font-semibold">{content}</div>
    </div>
  );
};

export default MainTiles;
