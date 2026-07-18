const TypingIndicator = () => {
  return (
    <div className="flex items-end gap-2">
      {/* Avatar AI */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-secondary text-white font-semibold">
        AI
      </div>

      {/* Bubble */}
      <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1">
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
