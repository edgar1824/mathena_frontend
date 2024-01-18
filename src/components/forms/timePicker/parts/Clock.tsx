import { useTimePickerContext } from "./Provider";
import { classes, fmtDoubleNum } from "./utils";

export const Clock = () => {
  const {
    mouse,
    mouseMoveHandler,
    current,
    format,
    changeTimeState,
    classNames,
    setMouse,
    time,
    pointerLineRef,
    clock,
  } = useTimePickerContext();

  return (
    <div className="relative px-2 py-3">
      <div
        draggable="false"
        className="bg-[rgba(8,_68,_66,_0.10)] rounded-full relative select-none box-content border-[4px] border-[rgba(8,_68,_66,_0.10)]"
        style={{
          cursor: mouse.down && mouse._down ? "move" : "default",
          width: `${clock?.width || 200}px`,
          height: `${clock?.height || 200}px`,
        }}
      >
        <div
          draggable="false"
          className="absolute inset-0 rounded-full z-[999] bg-[rgba(8,_68,_66,_0.10)]"
          style={{ cursor: mouse.down && mouse._down ? "move" : "default" }}
          onMouseDown={() => {
            if (current.state === "format") {
              changeTimeState(format === "hh:mm" ? "minutes" : "seconds");
            }
            setMouse((p) => ({ ...p, _down: true }));
          }}
          onMouseMove={mouseMoveHandler}
          onMouseUp={() => {
            setMouse((p) => ({ ...p, _down: false }));
            if (current.state === "hours") changeTimeState("minutes");
            else if (current.state === "minutes" && format !== "hh:mm")
              changeTimeState("seconds");
          }}
        ></div>
        <div
          ref={pointerLineRef}
          draggable="false"
          style={{
            transform: `rotate(${current.rotate}deg) translateX(-50%)`,
            width: `${clock?.pointerLine || 2}px`,
            cursor: mouse.down && mouse._down ? "move" : "default",
          }}
          className="h-1/2 bg-[var(--green)] rounded-lg origin-[0%_100%] absolute left-1/2 top-0"
        >
          <div
            style={{
              background:
                current.state !== "hours" && +current.rotate % 5
                  ? "white"
                  : "rgb(96 165 250 / 1)",
              borderWidth: `${clock?.round || 16}px`,
            }}
            className="box-content absolute w-1 h-1 rounded-full border-[var(--green)] -translate-x-1/2 left-1/2"
          ></div>
        </div>
        <div
          style={{
            width: `${(clock?.pointerLine || 2) * 3}px`,
            height: `${(clock?.pointerLine || 2) * 3}px`,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-[var(--green)]"
        ></div>

        {current.numbers.map(({ deg, num, show }, i) => (
          <div
            key={deg}
            style={{
              transform: `rotate(${deg}deg) translateX(-50%)`,
              width: `${clock?.pointerLine || 2}px`,
            }}
            className="h-1/2 rounded-lg origin-[0%_100%] absolute left-1/2"
          >
            <div
              style={{
                transform: `translate(calc(-50% + ${
                  (clock?.pointerLine || 2) / 2
                }px), ${((clock?.round || 16) + 4) / 2}px)`,
              }}
              className="text-base leading-none grid place-content-center"
            >
              <span
                style={{ transform: `rotate(-${deg}deg)` }}
                className={classes(
                  "grid place-content-center rounded-full text-center",
                  (time[current.state] === num ||
                    (i === current.numbers.length - 1 &&
                      time[current.state] === null)) &&
                    "!text-white",
                  typeof classNames?.timeNumber === "function"
                    ? classNames?.timeNumber?.({ deg, num, show })
                    : classNames?.timeNumber
                )}
              >
                {show && (current.state !== "hours" ? fmtDoubleNum(num) : num)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
