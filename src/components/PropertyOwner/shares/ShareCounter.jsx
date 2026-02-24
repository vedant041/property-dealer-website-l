import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../redux/shareSlice";

export default function ShareCounter() {
  const { count, pricePerShare } = useSelector(s => s.shares);
  const dispatch = useDispatch();

  return (
    <div className="flex items-end gap-10">

      {/* SHARES BLOCK */}
      <div>
        <div className="flex items-center h-[42px] bg-white/10 rounded-lg">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 text-[18px] hover:text-[#2ED3C6] transition"
          >
            −
          </button>

          <span className="px-6 text-[16px] font-medium">
            {count}
          </span>

          <button
            onClick={() => dispatch(increment())}
            className="px-4 text-[18px] hover:text-[#2ED3C6] transition"
          >
            +
          </button>
        </div>
      </div>

    
    </div>
  );
}