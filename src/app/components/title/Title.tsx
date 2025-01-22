export const Title = (prop: {text: string}) => {
    const { text } = prop;
    return (
        <>
            <h2 className="inner-title font-[700] text-[24px] text-white mb-[20px]">
                {text}
            </h2>
        </>
    );
}