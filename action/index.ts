import { SurahsType, SurahType, TafseerListType, TafseerType } from "@/types";

export const GetSurahs = async () => {
  try {
    const response = await fetch("https://api.alquran.cloud/v1/surah");

    if (response.status !== 200) {
      return { status: response.status, error: "Not Found" };
    }

    const { data } = (await response.json()) as SurahsType;

    return {
      status: response.status,
      data,
      success: "Data fetched successfully",
    };
  } catch (error) {
    return { status: 500, error: "Internal Server Error" };
  }
};

export const GetSurah = async ({ surahNumber }: { surahNumber: number }) => {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`
    );

    if (response.status !== 200) {
      return { status: response.status, error: "Not Found" };
    }

    const { data } = (await response.json()) as SurahType;

    return {
      status: response.status,
      data,
      success: "Data fetched successfully",
    };
  } catch (error) {
    return { status: 500, error: "Internal Server Error" };
  }
};

export const GetTafseerList = async () => {
  try {
    const response = await fetch(`http://api.quran-tafseer.com/tafseer`);

    if (response.status !== 200)
      return { status: response.status, error: "Not Found" };

    const data = (await response.json()) as TafseerListType;

    return {
      status: response.status,
      data,
      success: "Data fetched successfully",
    };
  } catch (error) {
    return { status: 500, error: "Internal Server Error" };
  }
};

export const GetTafseer = async ({
  tafseerId,
  surahNumber,
  ayahNumber,
}: {
  tafseerId: number;
  surahNumber: number;
  ayahNumber: number;
}) => {
  try {
    if (!surahNumber || !ayahNumber)
      return { status: 400, error: "Bad Request" };

    const response = await fetch(
      `http://api.quran-tafseer.com/tafseer/${tafseerId}/${surahNumber}/${ayahNumber}`
    );

    if (response.status !== 200)
      return { status: response.status, error: "Not Found" };

    const data = (await response.json()) as TafseerType;
    console.log(data);

    return {
      status: response.status,
      data,
      success: "Data fetched successfully",
    };
  } catch (error) {
    return { status: 500, error: "Internal Server Error" };
  }
};
