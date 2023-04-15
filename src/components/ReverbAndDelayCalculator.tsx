import { useState, useEffect } from "react";

export const ReverbAndDelayCalculator = () => {
  const [bpm, setBpm] = useState<number>(120);
  const [results, setResults] = useState<
    Array<{
      note: string;
      reverbSize: number;
      preDelay: number;
      decayTime: number;
      totalReverbTime: number;
      delayTime: number;
    }>
  >([]);

  useEffect(() => {
    const noteLengths = [
      { name: "Whole Note", multiplier: 4 },
      { name: "Half Note", multiplier: 2 },
      { name: "Quarter Note", multiplier: 1 },
      { name: "Eighth Note", multiplier: 0.5 },
      { name: "Sixteenth Note", multiplier: 0.25 },
    ];
    const newResults = noteLengths.map((noteLength) => {
      const timeInMs = (60_000 / bpm) * noteLength.multiplier;

      const reverbSize = timeInMs * 0.1;
      const preDelay = timeInMs * 0.2;
      const decayTime = timeInMs * 0.3;
      const totalReverbTime = timeInMs * 2;
      const delayTime = timeInMs * 3;

      return {
        note: noteLength.name,
        reverbSize,
        preDelay,
        decayTime,
        totalReverbTime,
        delayTime,
      };
    });

    setResults(newResults);
  }, [bpm]);

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8">
        Reverb & Delay Time Calculator
      </h1>

      <div className="mb-8">
        <label htmlFor="bpm" className="block text-sm font-medium">
          BPM
        </label>
        <input
          type="number"
          id="bpm"
          className="max-w-lg mt-2 p-2 border border-black rounded-md"
          value={bpm}
          onChange={(e) => {
            setBpm(Number(e.target.value));
          }}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Results:</h2>
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Note</th>
              <th className="border border-black p-2">Reverb Size (ms)</th>
              <th className="border border-black p-2">Pre-Delay (ms)</th>
              <th className="border border-black p-2">Decay Time (ms)</th>
              <th className="border border-black p-2">
                Total Reverb Time (ms)
              </th>
              <th className="border border-black p-2">Delay Time (ms)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td className="border border-black p-2">{result.note}</td>
                <td className="border border-black p-2">
                  {result.reverbSize.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {result.preDelay.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {result.decayTime.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {result.totalReverbTime.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {result.delayTime.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
