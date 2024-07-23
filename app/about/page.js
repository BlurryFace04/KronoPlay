export default function AboutPage() {
    return (
        <div className="min-h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-2 w-10/12 max-w-[750px] max-[500px]:w-[350px] bg-[white]/30 p-8 mt-[80px] rounded-xl backdrop-blur-3xl">
                <h1 className="text-xl"><strong>What is KronoPlay?</strong></h1>
                <h2>
                    At KronoPlay, we&apos;re not just a gaming platform; we&apos;re a community of passionate gamers embracing a new era of gaming freedom. Join us on this exciting journey where you pay for the time you play, retain control over your in-game assets, and experience the unmatched benefits of blockchain technology.
                </h2>
                <h1 className="text-lg font-bold">KronoPlay Instructions</h1>
                <ol className="flex flex-col gap-2">
                    <li><strong>Set Up Your Wallet:</strong> Make sure you have a wallet that supports base. Your wallet is your key to unlocking the KronoPlay universe.</li>
                    <li><strong>Configure Wallet Settings:</strong> Sign into your wallet and navigate to the settings tab. In the networks menu, shift to Base Sepolia, as KronoPlay is currently available on Testnet. Ensure your wallet is configured for optimal performance.</li>
                    <li><strong>Get ETH Tokens:</strong> Add ETH on Base Sepolia to your wallet. This step ensures you have the necessary tokens to kickstart your gaming adventure.</li>
                    <li><strong>Connect your wallet:</strong> Head over to KronoPlay and Click on the &quot;Connect Wallet&quot; button located at the top right corner of the platform. Approve the transaction that pops up to seamlessly log in to KronoPlay using your web3 wallet.</li>
                    <li><strong>Choose Your Game:</strong> Select the game you want to play. Click on it to enter the game page, where your gaming journey truly begins.</li>
                    <li><strong>Purchase KronoChips:</strong> On the game page, you&apos;ll find an option to buy KronoChips, which are session tokens for your gaming experience. Click on it, specify the desired number of KronoChips, sign the transactions, and you&apos;re all set.</li>
                    <li><strong>Ready to Play:</strong> Click on &quot;START Game Session&quot; and sign the transaction once more. Congratulations! You&apos;ve successfully paid for your gaming session, and now you&apos;re ready to dive into the world of gaming.</li>
                    <li><strong>Game On:</strong> Wait for the game to load, and then – boom! – play the game to your heart&apos;s content. Enjoy a seamless, pay-as-you-play gaming experience like never before.</li>
                </ol>
                <p>When you are done with the game, click on the home button to play a new game!</p>
            </div>
            <img src="/auth.svg" alt="auth" className="fixed right-0 max-h-[80%] object-contain max-w-[450px] min-w-[150px] w-1/2" />
        </div>
    )
}