export interface Blink {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  moreDescription?: string;
}

export const blinks: Blink[] = [
  {
    title: "Svault",
    description: "A blink to manage your SOLs in a vault.",
    imageUrl: "https://svault.ayushagr.me/logo.png",
    liveUrl: "https://svault.ayushagr.me",
    githubUrl: "https://github.com/A91y/svault",
    moreDescription:
      "A simple and efficient way to manage a vault on the Solana blockchain. This blink bootstrapped with Anchor to interact with Solana programs.",
  },
  {
    title: "Mintok",
    description: "A blink to mint SPL tokens.",
    imageUrl: "https://mintok.ayushagr.me/logo.png",
    liveUrl: "https://mintok.ayushagr.me",
    githubUrl: "https://github.com/A91y/mintok",
    moreDescription:
      "Mintok is a blink to mint SPL tokens on the Solana blockchain.",
  },
  {
    title: "Transol",
    description: "A blink to transfer SOL to another Solana wallet.",
    imageUrl: "https://transol.ayushagr.me/logo.png",
    liveUrl: "https://transol.ayushagr.me",
    githubUrl: "https://github.com/A91y/transol",
    moreDescription:
      "Quick and easy way to transfer SOL to another Solana wallet. Payment links to a wallet can be created to accept on devnet & mainnet.",
  },
];
