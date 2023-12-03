import { Switch, MantineProvider } from "@mantine/core";

export const RekomendasiTambahMenu = ({ onClick }) => {
  const themeSettings = {
    colors: {
      brown: [
        "#faf1ef",
        "#eee2de",
        "#e0bfb8",
        "#d39c8e",
        "#c87e6b",
        "#c26a54",
        "#bf6048",
        "#a8503a",
        "#974632",
        "#853b29",
      ],
    },
    primaryColor: "brown",
  };

  return (
    <div className="bg-white rounded-xl shadow w-full py-10">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-[24px] font-medium ml-10">Rekomendasikan Menu</h1>
          <p className="text-[20px] font-normal ml-10">
            Menu ini akan muncul di rekomendasi pelanggan
          </p>
        </div>
        <div className="absolute right-20">
          <MantineProvider theme={themeSettings}>
            <Switch size="lg" />
          </MantineProvider>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-brown rounded-full font-bold text-white text-[1rem] px-[6rem] py-3 mr-10"
          onClick={onClick}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};
