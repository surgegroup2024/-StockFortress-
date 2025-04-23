import React from 'react';
import { Loader2Icon } from 'lucide-react';
// Stock example component
const StockExample = ({
  ticker,
  image,
  animationDuration
}) => {
  return <a className={`bg-white/[0.06] text-white/50 transition-all duration-[0.06s] relative text-base cursor-pointer leading-[16px] animate-search-example border border-white/10 rounded-[7px] p-[7px]`} style={{
    animationDuration: `${animationDuration}s`
  }}>
      <div className="hidden absolute w-full h-full align-middle bg-black/85 leading-[16px] animate-none transition-all duration-500 flex-col items-center justify-center select-none will-change-opacity z-[1000] top-0 left-0 rounded-[7px] p-[16px]">
        <div className="block absolute top-1/2 left-1/2 z-[99] w-[24px] h-[24px] text-white/90 text-[14.8571px]">
          <span className="block absolute top-0 left-1/2 w-[24px] h-[24px] text-white/90 text-[14.8571px] border-[2.66667px] border-white/15 rounded-[7000px] -ml-[12px]"></span>
          <span className="block absolute top-0 left-1/2 w-[24px] h-[24px] text-white/90 text-[14.8571px] border-t-[2.66667px] border-t-white border-l-transparent border-r-transparent border-b-transparent rounded-[7000px] -ml-[12px]"></span>
        </div>
      </div>
      {image && <img src={image} className="relative inline-block bg-transparent w-[17.5px] h-[17.5px] mr-[3.5px]" />}
      <span className="align-middle">{ticker}</span>
    </a>;
};
export const StockExamples = () => {
  // Stock data with ticker, image URL, and animation duration
  const stocks = [{
    ticker: 'XOM',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/xom.png',
    duration: 1.9
  }, {
    ticker: 'WMT',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/wmt.png',
    duration: 2.0
  }, {
    ticker: 'TSLA',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/tsla.png',
    duration: 2.1
  }, {
    ticker: 'SBUX',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/sbux.png',
    duration: 2.2
  }, {
    ticker: 'PYPL',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/pypl.png',
    duration: 2.3
  }, {
    ticker: 'PG',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/pg.png',
    duration: 2.4
  }, {
    ticker: 'ORCL',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/orcl.png',
    duration: 2.5
  }, {
    ticker: 'NFLX',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/nflx.png',
    duration: 2.6
  }, {
    ticker: 'MSFT',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/msft.png',
    duration: 2.7
  }, {
    ticker: 'MMM',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/mmm.png',
    duration: 2.8
  }, {
    ticker: 'META',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/meta.png',
    duration: 2.9
  }, {
    ticker: 'KO',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/ko.png',
    duration: 3.0
  }, {
    ticker: 'INTC',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/intc.png',
    duration: 3.1
  }, {
    ticker: 'GOOGL',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/googl.png',
    duration: 3.2
  }, {
    ticker: 'COST',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/cost.png',
    duration: 3.3
  }, {
    ticker: 'BABA',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nyse/baba.png',
    duration: 3.4
  }, {
    ticker: 'AMZN',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/amzn.png',
    duration: 3.5
  }, {
    ticker: 'ADBE',
    image: 'https://ik.imagekit.io/kkbzr2uz4cp/stock/nasdaq/adbe.png',
    duration: 3.6
  }];
  return <div>
      <div className="flex flex-wrap gap-[7px] justify-center max-h-[79.8px] overflow-y-hidden pt-[1.4px] mt-[8.4px]">
        {stocks.map((stock, index) => <StockExample key={index} ticker={stock.ticker} image={stock.image} animationDuration={stock.duration} />)}
      </div>
    </div>;
};