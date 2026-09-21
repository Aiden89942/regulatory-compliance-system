function Container() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between leading-[23px] left-0 text-[#ececf3] text-[16px] text-nowrap top-0 tracking-[0.48px] w-[300px]" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        完成進度
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] not-italic relative shrink-0">3/1</p>
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[#ececf3] h-[12px] left-0 rounded-[3.35544e+07px] top-[32px] w-[300px]" data-name="Primitive.div" />;
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[#ffe600] h-[12px] left-0 rounded-[3.35544e+07px] top-[32px] w-[96px]" data-name="Primitive.div" />;
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Container />
      <PrimitiveDiv />
      <PrimitiveDiv1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}