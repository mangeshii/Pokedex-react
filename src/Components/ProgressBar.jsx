const ProgressBar = ({stats}) => {
    return <>

<div className="stats-name">
                        {typeof stats !== "undefined" ? (
                            <>
                                {stats.map((info) => {
                                    const { base_stat } = info;
                                    const { stat } = info;
                                    const { name } = stat;
                                    return (
                                        <>
                                            <div className="value">
                                                <h4 className="names">
                                                    {name}
                                                </h4>
                                                <h4 className="val">
                                                    {base_stat}
                                                </h4>
                                            </div>
                                        </>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>

                    {typeof stats !== "undefined" ? (
                        <>
                            <div className="wrapper">
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[0].base_stat}%`,
                                            height: "3rem",
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>

                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[1].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[2].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[3].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[4].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[5].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p></p>
                    )}
    </>;
};
export default ProgressBar;
