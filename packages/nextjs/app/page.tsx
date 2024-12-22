"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useState } from "react";
import { useScaffoldContract, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [playerChoice, setPlayerChoice] = useState(0);
  const [winner, setWinner] = useState(0);

  const {writeContractAsync:input} = useScaffoldWriteContract(
    { contractName: "YourContract" });

  const{writeContractAsync:input2} = useScaffoldWriteContract({
    contractName: "YourContract"
  });

  const{writeContractAsync:reset} = useScaffoldWriteContract({
    contractName: "YourContract"
  });

  const {data: result} = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "winner"
  });

  function play() {
    input2({
      functionName: "playGame"
    });
    setWinner(Number(result));
  }


  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="card bg-base-100 w-96 shadow-xl m-3">
          <div className="card-body">
            <h2 className="card-title">Ввод</h2>
            <p>Сделай выбор!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick = {() =>{
                setPlayerChoice(1);
                input({
                  functionName: "input",
                  args: [BigInt(playerChoice)],
                });
              }}
              >
                Камень
                </button>
                <button className="btn btn-primary" onClick = {() =>{
                setPlayerChoice(2);
                input({
                  functionName: "input",
                  args: [BigInt(playerChoice)],
                });
              }}
              >
                Бумага
                </button>
                <button className="btn btn-primary" onClick = {() =>{
                setPlayerChoice(3);
                input({
                  functionName: "input",
                  args: [BigInt(playerChoice)],
                });
              }}
              >
                Ножницы
                </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Игра</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick = {() => play()}>
                Играть</button>
              <button className="btn btn-primary" onClick = {() =>{
                reset({
                  functionName: "reset"
                });
                setWinner(0);
              }}
              >Новая игра</button>
            </div>
            <div> Победитель:</div>
            <div>{winner}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
