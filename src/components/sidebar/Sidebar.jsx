import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { globals } from "./../../Globals/filterState";

export const Sidebar = () => {
  const { isRoadster, isGucci, isNike } = globals;
  const [isRoadsterChecked, setIsRoadsterChecked] = useRecoilState(isRoadster);
  const [isGucciChecked, setIsGucciChecked] = useRecoilState(isGucci);
  const [isNikeChecked, setIsNikeChecked] = useRecoilState(isNike);

  useEffect(() => {
    console.log(isRoadsterChecked, isGucciChecked, isNikeChecked);
  }, [isRoadsterChecked, isGucciChecked, isNikeChecked]);
  return (
    <div className="sidebar">
      <ul>
        <p>select your favourite brand</p>
        <li>
          <input
            type="checkbox"
            id="Roadster"
            onChange={() => {
              setIsRoadsterChecked(!isRoadsterChecked);
            }}
          />
          <label htmlFor="Roadster">Roadster</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="Gucci"
            onChange={() => {
              setIsGucciChecked(!isGucciChecked);
            }}
          />
          <label htmlFor="Gucci">Gucci</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="Nike"
            onChange={() => {
              setIsNikeChecked(!isNikeChecked);
            }}
          />
          <label htmlFor="Nike">Nike</label>
        </li>
      </ul>
    </div>
  );
};
