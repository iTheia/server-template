import { FC } from "react";

interface Props {
    type: "full" | "block" | "spinning";
}
export const Loader: FC<Props> = ({ type = "full" }) => {
    if (type === "block") return <div></div>;

    if (type === "spinning") return <div></div>;

    return <div>...loader</div>;
};
