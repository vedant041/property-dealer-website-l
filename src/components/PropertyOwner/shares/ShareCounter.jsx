import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../redux/shareSlice";

export default function ShareCounter() {
  const { count, pricePerShare } = useSelector(s => s.shares);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3">
      <span className="text-yellow-400">Shares</span>

      <div className="flex items-center bg-white/10 rounded-md">
        <button onClick={() => dispatch(decrement())} className="px-3">−</button>
        <span className="px-4">{count}</span>
        <button onClick={() => dispatch(increment())} className="px-3">+</button>
      </div>

      <span className="text-yellow-400 ml-6">Amount</span>
      <div className="bg-white/10 px-4 py-2 rounded-md">
        ₹ {(count * pricePerShare).toLocaleString()}
      </div>
    </div>
  );
}
