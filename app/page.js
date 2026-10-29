"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.buttonWrap}>
        <Pill
          type="primary"
          state="default"
          onClick={() => setIsModalOpen(true)}
        >
          Primary
        </Pill>
      </div>

      <Modal
        showSeparator
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
