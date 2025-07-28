player.onChat("/Test", function () {
    mobs.spawn(GOAT, player.position())
    mobs.applyEffect(STRENGTH, mobs.target(NEAREST_PLAYER), 9999, 255)
})
